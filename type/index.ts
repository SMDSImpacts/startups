// types/index.ts

export type Post = {
    _id: number,
    _createdAt: Date,
    views: number,
    title: string,
    description: string,
    category: string,
    image?: string,
    author: {
        _id: number; // Standardize on string for database IDs
        name: string;
    } | null,

};