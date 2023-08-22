export type Banner = {
    id: string;
    title: string;
    description: string;
    cover_image_path?: string;
    thumbnail_image_path?: string;
    redirect_link: string;
    file_link: string;
    thumbnail_link: string;
};

export type SocialMedia = {
    id: number;
    name: string;
    file_link: string;
    link: string;
};

export type WebProfile = {
    about_us: string;
    promotional_video_link: string;
    contact_us: string;
    embedded_twitter: string;
    youtube_video_key: string;
};

export type Game = {
    id: number;
    name: string;
    file_link: string;
    redirect_link: string;
    cover_link: string
    color_background?: string;
};

export interface allDataLanding {
    banner: Array<Banner>
    promotional_video: Array<{
        id: number,
        link: string
    }>
    blogCategory: Array<{
        id: number
        name: string
    }>
    social_media: Array<SocialMedia>
    game: Game[]
    web_profile: {
        about_us: string
        contact_us: string
    }
    news: Array<{
        id: number
        body: string
        category: {
            id: number
            name: string
        }
        title: string
    }>
    // social_media: SocialMedia
    blog: Array<{
        id: number
        body: string
        title: string
        category: {
            id: number
            name: string
        }
        admin: {
            fullname: string
        }
        file_link: string
        created_at: string
        has_hashtag: Array<{
            hashtag: {
                id: number
                name: string
            }
        }>
    }>
}

export interface detailBlog {
    id:number
    image:Array<any>
    admin_id:number
    admin :{
        id:number
        fullname:String
    }
    category:{
        id:number
        name:string
    }
    file_link:String | any
    has_hashtag :Array<{
        id:number
        hashtag:{
            id:number
            name:string
        }
    }>
    title:string
    created_at:string
    body:string
}