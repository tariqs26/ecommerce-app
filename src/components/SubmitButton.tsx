"use client"

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom"
import { Button, ButtonProps } from "@nextui-org/react"
import {Spinner} from "./Spinner"

export function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      color="warning"
      isLoading={pending}
      spinner={<Spinner />}
      {...props}
    />
  )
}
