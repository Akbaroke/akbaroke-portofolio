import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Group, Textarea } from '@mantine/core';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { BsFillCheckCircleFill, IoIosCloseCircle } from 'react-icons/all';
import axios from 'axios';
const env = import.meta.env;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const TOKEN = env.VITE_APP_TOKEN as string;
  const CHATID = env.VITE_APP_CHATID as string;

  const form = useForm({
    initialValues: { name: '', email: '', message: '' },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length < 2 ? 'Message must have at least 2 letters' : null),
    },
  });

  const MESSAGE = `Name : ${form.values.name}\nEmail : ${form.values.email}\nMessage : ${form.values.message}`;

  const handleSendMessage = () => {
    setIsLoading(true);
    sendMessage();
    setIsLoading(false);
    form.setValues({ name: '', email: '', message: '' });
  };

  const sendMessage = async () => {
    notifications.show({
      id: 'sendMessage',
      loading: true,
      title: 'Loading..',
      message: 'Message is being sent!',
      autoClose: false,
      withCloseButton: false,
    });
    try {
      await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHATID,
        text: MESSAGE,
        parse_mode: 'HTML',
      });
      notifications.update({
        id: 'sendMessage',
        color: 'teal',
        title: 'Success',
        message: 'Message sent successfully!',
        icon: <BsFillCheckCircleFill />,
        autoClose: 3000,
      });
      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
      notifications.update({
        id: 'sendMessage',
        color: 'red',
        title: 'Error',
        message: 'Message failed to send!',
        icon: <IoIosCloseCircle />,
        autoClose: 3000,
      });
    }
  };

  return (
    <Box mt="md" mx={30}>
      <form onSubmit={form.onSubmit(handleSendMessage)}>
        <Group grow mt="sm" sx={{ display: 'flex', alignItems: 'start' }}>
          <TextInput placeholder="Your name" label="Full name" size="md" withAsterisk {...form.getInputProps('name')} />
          <TextInput placeholder="Your Email" label="Email" size="md" withAsterisk {...form.getInputProps('email')} />
        </Group>
        <Group grow mt="sm">
          <Textarea placeholder="Your message" label="Message" size="md" withAsterisk {...form.getInputProps('message')} />
        </Group>
        <Button type="submit" leftIcon={<FiSend />} mt="sm" className="bg-blue-400" loading={isLoading}>
          Send
        </Button>
      </form>
    </Box>
  );
}
