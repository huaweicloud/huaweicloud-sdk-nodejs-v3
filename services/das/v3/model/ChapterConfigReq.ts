

export class ChapterConfigReq {
    public enabled?: boolean;
    private 'sub_chapters'?: { [key: string]: boolean; };
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): ChapterConfigReq {
        this['enabled'] = enabled;
        return this;
    }
    public withSubChapters(subChapters: { [key: string]: boolean; }): ChapterConfigReq {
        this['sub_chapters'] = subChapters;
        return this;
    }
    public set subChapters(subChapters: { [key: string]: boolean; }  | undefined) {
        this['sub_chapters'] = subChapters;
    }
    public get subChapters(): { [key: string]: boolean; } | undefined {
        return this['sub_chapters'];
    }
}