import React from 'react';
import {
    Card,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import {formalDate} from "@/lib/utils";
import { EyeIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CloudinaryImage from "@/components/CloudinaryImage";
import {Button} from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StartupCard = ( {post}: {post: any})  => {
    const { _createdAt, views, title, description, category, author, _id } = post;
    return (
        <li className="">
            <Card className="hover:border-pink-700 hover:bg-pink-100 bg-pink-50">
                <div className="flex-col mx-4">
                    <div className="flex justify-between">
                    <div>
                        <p className="text-[12px] text-sm font-medium text-gray-600">
                            {formalDate(_createdAt)}
                        </p>
                    </div>
                    <div className="flex items-center justify-end gap-0.5">
                        <EyeIcon size={14} className="text-pink-500" />
                        <span className="text-[12px] text-sm font-medium text-gray-600">{views}</span>
                    </div>
                    </div>
                    <div className="flex-between mt-5 gap-5">
                        <Link href={`/user/${post.author?._id}`}>
                            <CardDescription>
                                <p className="text-i6-medium line-clamp-1">{post.author?.name}</p>
                            </CardDescription>

                        </Link>
                    </div>
                    <div className="flex items-center justify-between gap-0.5">
                        <Link href={`/startup/${post._id}`}>
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
                                alt="card image"
                                src="/logo.png"
                                width={60}
                                height={60}
                            />
                        </Link>
                    <div>
                        <Link href={`/startup/${author?._id}`}>
                            <CardDescription>
                                {description}
                            </CardDescription>
                            <p>
                                <CloudinaryImage />
                            </p>
                        </Link>
                    </div>
                    <CardFooter className="justify-between">
                        <Link href={`/?query=${category.toLowerCase()}`}>
                           <p>{category}</p>
                        </Link>
                        <Button asChild>
                            <Link href={`/startup/${post._id}`}>
                                Details
                            </Link>
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </li>
    );
};

export default StartupCard;