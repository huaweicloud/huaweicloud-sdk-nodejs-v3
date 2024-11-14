

export class InferenceVideoMarkInfo {
    private 'video_start_time'?: string;
    private 'video_end_time'?: string;
    private 'chat_video_start_time'?: string;
    private 'chat_video_end_time'?: string;
    public constructor() { 
    }
    public withVideoStartTime(videoStartTime: string): InferenceVideoMarkInfo {
        this['video_start_time'] = videoStartTime;
        return this;
    }
    public set videoStartTime(videoStartTime: string  | undefined) {
        this['video_start_time'] = videoStartTime;
    }
    public get videoStartTime(): string | undefined {
        return this['video_start_time'];
    }
    public withVideoEndTime(videoEndTime: string): InferenceVideoMarkInfo {
        this['video_end_time'] = videoEndTime;
        return this;
    }
    public set videoEndTime(videoEndTime: string  | undefined) {
        this['video_end_time'] = videoEndTime;
    }
    public get videoEndTime(): string | undefined {
        return this['video_end_time'];
    }
    public withChatVideoStartTime(chatVideoStartTime: string): InferenceVideoMarkInfo {
        this['chat_video_start_time'] = chatVideoStartTime;
        return this;
    }
    public set chatVideoStartTime(chatVideoStartTime: string  | undefined) {
        this['chat_video_start_time'] = chatVideoStartTime;
    }
    public get chatVideoStartTime(): string | undefined {
        return this['chat_video_start_time'];
    }
    public withChatVideoEndTime(chatVideoEndTime: string): InferenceVideoMarkInfo {
        this['chat_video_end_time'] = chatVideoEndTime;
        return this;
    }
    public set chatVideoEndTime(chatVideoEndTime: string  | undefined) {
        this['chat_video_end_time'] = chatVideoEndTime;
    }
    public get chatVideoEndTime(): string | undefined {
        return this['chat_video_end_time'];
    }
}