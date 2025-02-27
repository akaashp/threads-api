import { AxiosRequestConfig } from 'axios';
import { Extensions, Thread, ThreadsUser } from './threads-types';
export type AndroidDevice = {
    manufacturer: string;
    model: string;
    os_version: number;
    os_release: string;
};
export type GetUserProfileResponse = {
    data: {
        userData: {
            user: ThreadsUser;
        };
    };
    extensions: Extensions;
};
export type GetUserProfileThreadsResponse = {
    data: {
        mediaData?: {
            threads: Thread[];
        };
    };
    extensions: Extensions;
};
export type GetUserProfileRepliesResponse = {
    data: {
        mediaData?: {
            threads: Thread[];
        };
    };
    extensions: Extensions;
};
export type GetUserProfileThreadResponse = {
    data: {
        data: {
            containing_thread: Thread;
            reply_threads?: Thread[];
        };
    };
    extensions: Extensions;
};
export type GetThreadLikersResponse = {
    data: {
        likers: {
            users: ThreadsUser[];
        };
    };
    extensions: Extensions;
};
export type InstagramImageUploadResponse = {
    upload_id: string;
    xsharing_nonces: {};
    status: 'ok';
};
export type FriendshipStatusResponse = {
    friendship_status: {
        following: boolean;
        followed_by: boolean;
        blocking: boolean;
        muting: boolean;
        is_private: boolean;
        incoming_request: boolean;
        outgoing_request: boolean;
        text_post_app_pre_following: boolean;
        is_bestie: boolean;
        is_restricted: boolean;
        is_feed_favorite: boolean;
        is_eligible_to_subscribe: boolean;
    };
    status: 'ok';
};
export type ThreadsAPIOptions = {
    verbose?: boolean;
    token?: string;
    fbLSDToken?: string;
    noUpdateToken?: boolean;
    noUpdateLSD?: boolean;
    httpAgent?: AxiosRequestConfig['httpAgent'];
    httpsAgent?: AxiosRequestConfig['httpsAgent'];
    username?: string;
    password?: string;
    deviceID?: string;
    device?: AndroidDevice;
    userID?: string;
};
export type ThreadsAPIPublishOptions = {
    text?: string;
    parentPostID?: string;
} & ({
    url?: string;
} | {
    image?: string;
});
export declare const DEFAULT_DEVICE: AndroidDevice;
export declare class ThreadsAPI {
    verbose: boolean;
    token?: string;
    fbLSDToken: string;
    noUpdateToken: boolean;
    noUpdateLSD: boolean;
    httpAgent?: AxiosRequestConfig['httpAgent'];
    httpsAgent?: AxiosRequestConfig['httpsAgent'];
    username?: string;
    password?: string;
    deviceID: string;
    device?: AndroidDevice;
    userID: string | undefined;
    constructor(options?: ThreadsAPIOptions);
    _getAppHeaders: () => {
        Authorization?: string | undefined;
        'User-Agent': string;
        'Content-Type': string;
    };
    _getDefaultHeaders: (username?: string) => {
        referer?: string | undefined;
        authority: string;
        accept: string;
        'accept-language': string;
        'cache-control': string;
        origin: string;
        pragma: string;
        'Sec-Fetch-Site': string;
        'x-asbd-id': string;
        'x-fb-lsd': string;
        'x-ig-app-id': string;
        Authorization?: string | undefined;
        'User-Agent': string;
        'Content-Type': string;
    };
    getProfilePage: (url: string, username: string, options?: AxiosRequestConfig) => Promise<string>;
    getUserIDfromUsernameWithInstagram: (username: string, options?: AxiosRequestConfig) => Promise<string | undefined>;
    getUserIDfromUsername: (username: string, options?: AxiosRequestConfig) => Promise<string | undefined>;
    getCurrentUserID: (options?: AxiosRequestConfig) => Promise<string | undefined>;
    getUserProfile: (username: string, userID: string, options?: AxiosRequestConfig) => Promise<ThreadsUser>;
    getUserProfileThreads: (username: string, userID: string, options?: AxiosRequestConfig) => Promise<Thread[]>;
    getUserProfileReplies: (username: string, userID: string, options?: AxiosRequestConfig) => Promise<Thread[]>;
    getPostIDfromThreadID: (threadID: string, options?: AxiosRequestConfig) => Promise<string | undefined>;
    getPostIDfromURL: (postURL: string, options?: AxiosRequestConfig) => Promise<string | undefined>;
    getThreads: (postID: string, options?: AxiosRequestConfig) => Promise<{
        containing_thread: Thread;
        reply_threads?: Thread[] | undefined;
    }>;
    getThreadLikers: (postID: string, options?: AxiosRequestConfig) => Promise<{
        users: ThreadsUser[];
    }>;
    _toggleAuthPostRequest: <T extends unknown>(url: string, options?: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<T, any>>;
    like: (postID: string, options?: AxiosRequestConfig) => Promise<boolean>;
    unlike: (postID: string, options?: AxiosRequestConfig) => Promise<boolean>;
    follow: (userID: string, options?: AxiosRequestConfig) => Promise<FriendshipStatusResponse>;
    unfollow: (userID: string, options?: AxiosRequestConfig) => Promise<FriendshipStatusResponse>;
    getToken: () => Promise<string | undefined>;
    delete: (postID: string, options?: AxiosRequestConfig) => Promise<boolean>;
}
