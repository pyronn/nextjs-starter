import {Modal, ModalContent, ModalHeader} from "@nextui-org/modal";
import {ModalBody, ModalFooter} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Checkbox} from "@nextui-org/checkbox";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import {AiOutlineLock, AiOutlineMail} from "react-icons/ai";
import {Divider} from "@nextui-org/divider";
import {FormEvent, useState} from "react";
import {signIn} from "next-auth/react";

type LoginModalProps = {
    isOpen: boolean
    onOpenChange: () => void
}

export const LoginModal = ({isOpen, onOpenChange}: {
    isOpen: boolean
    onOpenChange: () => void
}) => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        isRemember: false,
    })

    const handleUsernameChange = (value: string) => {
        setInputs(values => ({
            ...values,
            ['username']: value
        }))
    }
    const handlePasswordChange = (value: string) => {
        setInputs(values => ({
            ...values,
            ['password']: value
        }))
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        console.log(inputs)
        await signIn("credentials", {
            username: inputs.username,
            password: inputs.password,
            callbackUrl:'/'
        })
    }

    const handleLogin = () => {
        const loginSubmit = document.getElementById('loginSubmit')
        loginSubmit?.click()
    }
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                        <ModalBody>
                            <div>
                                provider
                            </div>
                            <Divider title={'login with email'}/>
                            <form onSubmit={handleSubmit} >
                                <div>
                                    <Input
                                        autoFocus
                                        endContent={
                                            <AiOutlineMail
                                                className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                                        }
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="bordered"
                                        onValueChange={handleUsernameChange}
                                    />
                                    <Input
                                        endContent={
                                            <AiOutlineLock size={24} className={'text-default-400'}/>
                                        }
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant="bordered"
                                        onValueChange={handlePasswordChange}
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <Checkbox
                                            classNames={{
                                                label: "text-small",
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                        <Link color="primary" href="#" size="sm">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <button id={'loginSubmit'} type={'submit'} hidden={true}></button>
                                </div>
                            </form>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={handleLogin}>
                                Sign in
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
