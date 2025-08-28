

export class DocumentSegmentInfo {
    private 'text_index'?: number;
    public id?: string;
    public title?: string;
    public text?: string;
    public constructor() { 
    }
    public withTextIndex(textIndex: number): DocumentSegmentInfo {
        this['text_index'] = textIndex;
        return this;
    }
    public set textIndex(textIndex: number  | undefined) {
        this['text_index'] = textIndex;
    }
    public get textIndex(): number | undefined {
        return this['text_index'];
    }
    public withId(id: string): DocumentSegmentInfo {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): DocumentSegmentInfo {
        this['title'] = title;
        return this;
    }
    public withText(text: string): DocumentSegmentInfo {
        this['text'] = text;
        return this;
    }
}