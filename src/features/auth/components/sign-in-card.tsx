"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";
import { TriangleAlert } from "lucide-react";

export const SignInCard = () => {
  const onProviderSignIn = (provider: "github" | "google") => {
    signIn(provider, { callbackUrl: "/" });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onCredentialsSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "/",
    });
  };
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login To Continue</CardTitle>
        <CardDescription>
          Use Your Email Or Another Service To Continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>Invalid Email Or Password</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form onSubmit={onCredentialsSignIn} className="space-y-2.5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size="lg">
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            variant="outline"
            size="lg"
            className="w-full relative"
            onClick={() => onProviderSignIn("github")}
          >
            <FaGithub className="mr-2 size-5 top-2.5 left-2.5 absolute" />
            Continue With GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full relative"
            onClick={() => onProviderSignIn("google")}
          >
            <FcGoogle className="mr-2 size-5 top-2.5 left-2.5 absolute" />
            Continue With Google
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don&apos;t Have An Account?{" "}
          <Link href="/sign-up">
            <span className="text-sky-700 hover:underline">Sign Up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
