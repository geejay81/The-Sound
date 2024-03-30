type Post = {
    content: string;
    data: { 
        title: string,
        description: string,
        date: Date,
        slug: string
    };
    filePath: string;
}

export default Post;