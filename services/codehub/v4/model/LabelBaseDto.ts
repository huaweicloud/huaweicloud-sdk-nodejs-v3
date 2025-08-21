

export class LabelBaseDto {
    public id?: number;
    public name?: string;
    public color?: string;
    public description?: string;
    private 'text_color'?: string;
    public constructor() { 
    }
    public withId(id: number): LabelBaseDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LabelBaseDto {
        this['name'] = name;
        return this;
    }
    public withColor(color: string): LabelBaseDto {
        this['color'] = color;
        return this;
    }
    public withDescription(description: string): LabelBaseDto {
        this['description'] = description;
        return this;
    }
    public withTextColor(textColor: string): LabelBaseDto {
        this['text_color'] = textColor;
        return this;
    }
    public set textColor(textColor: string  | undefined) {
        this['text_color'] = textColor;
    }
    public get textColor(): string | undefined {
        return this['text_color'];
    }
}