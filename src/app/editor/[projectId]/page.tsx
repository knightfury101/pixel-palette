"use client";

import { Button } from "@/components/ui/button";
import { Editor } from "@/features/editor/components/editor";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { Loader, TriangleAlert } from "lucide-react";
import Link from "next/link";

interface EditorProjectIdPageProps {
  params: {
    projectId: string;
  };
}

const EditorProjectIdPage = ({ params }: EditorProjectIdPageProps) => {
  const { data, isLoading, isError } = useGetProject(params.projectId);

  if (isLoading || !data) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <Loader className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="gap-y-5 h-full flex flex-col items-center justify-center">
        {/* <div className=" bg-destructive/15 items-center justify-center rounded-md gap-y-5 p-3 flex flex-col w-auto"> */}
        <TriangleAlert className="size-6 text-muted-foreground" />
        {/* I can also put text-red-500 here to make it red. */}
        <p className="text-muted-foreground text-sm">
          {/* I can also put text-red-500 here to make it red. */}
          Failed To Fetch Project
        </p>
        <Button asChild variant="secondary">
          <Link href="/">Back To Home</Link>
        </Button>
        {/* </div> */}
      </div>
    );
  }

  return <Editor initialData={data} />;
};

export default EditorProjectIdPage;
