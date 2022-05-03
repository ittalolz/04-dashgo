import { Button, Flex, Stack } from "@chakra-ui/react";
import { format, resolve } from "path";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInFormatData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handelSignIn: SubmitHandler<SignInFormatData> = async (values) => {   
    await new Promise(resolve => setTimeout(resolve,2000));
    
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handelSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            {...register("password")}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
