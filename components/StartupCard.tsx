import React from 'react';
import {
    Card,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import {cn, formatDate} from "@/lib/utils";
import { EyeIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CloudinaryImage from "@/components/CloudinaryImage";
import {Button} from "@/components/ui/button";
import { Author, Startup } from '@/sanity/types';
import { Skeleton } from "@/components/ui/skeleton";

export type StartupTypeCard = Omit<Startup, "author"> & {author?: Author}


const StartupCard = ( {post}: {post: StartupTypeCard})  => {
    const {
        _createdAt,
        views,
        author,
        title,
        category,
        _id,
        image,
        description,
    } = post;
    return (
        <li className="">
            <Card className="hover:border-pink-700 hover:bg-pink-100 bg-pink-50">
                <div className="flex-col mx-4">
                    <div className="flex justify-between">
                    <div>
                        <p className="text-[12px] text-sm font-medium text-gray-600">
                            {formatDate(_createdAt)}
                        </p>
                    </div>
                    <div className="flex items-center justify-end gap-0.5">
                        <EyeIcon size={14} className="text-pink-500" />
                        <span className="text-[12px] text-sm font-medium text-gray-600">{views}</span>
                    </div>
                    </div>
                    <div className="flex-between mt-5 gap-5">
                        <Link href={`/user/${author?._id}`}>
                            <CardDescription>
                                <p className="text-i6-medium line-clamp-1">{author?.name}</p>
                            </CardDescription>

                        </Link>
                    </div>
                    <div className="flex items-center justify-between gap-0.5">
                        <Link href={`/startup/${_id}`}>
                            <CardTitle>
                                {title}
                            </CardTitle>
                        </Link>
                        <Image
                            alt="card image"
                            src="https://placehold.co/35"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                        <Link href={`/user/${_id}`}>
                            <Image
                                alt={author?.name || "name"}
                                src={author?.image || "/logo.png"}
                                width={48}
                                height={48}
                            />
                        </Link>
                    <div>
                        <Link href={`/startup/${author?._id}`}>
                            <CardDescription>
                                {description}
                            </CardDescription>
                            <p>
                                <CloudinaryImage image={image || ""} />
                            </p>
                        </Link>
                    </div>
                    <CardFooter className="justify-between">
                        <Link href={`/?query=${category?.toLowerCase()}`}>
                           <p>{category}</p>
                        </Link>
                        <Button className="startup-card_btn" asChild>
                            <Link href={`/startup/${_id}`}>
                                Details
                            </Link>
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </li>
    );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default StartupCard;