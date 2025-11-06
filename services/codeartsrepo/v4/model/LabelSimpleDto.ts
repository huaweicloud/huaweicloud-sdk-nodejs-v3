import { LabelBaseDto } from './LabelBaseDto';


export class LabelSimpleDto {
    public id?: number;
    public name?: string;
    public color?: string;
    public description?: string;
    private 'text_color'?: string;
    private 'expires_at'?: string;
    private 'is_expired'?: boolean;
    public constructor() { 
    }
    public withId(id: number): LabelSimpleDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LabelSimpleDto {
        this['name'] = name;
        return this;
    }
    public withColor(color: string): LabelSimpleDto {
        this['color'] = color;
        return this;
    }
    public withDescription(description: string): LabelSimpleDto {
        this['description'] = description;
        return this;
    }
    public withTextColor(textColor: string): LabelSimpleDto {
        this['text_color'] = textColor;
        return this;
    }
    public set textColor(textColor: string  | undefined) {
        this['text_color'] = textColor;
    }
    public get textColor(): string | undefined {
        return this['text_color'];
    }
    public withExpiresAt(expiresAt: string): LabelSimpleDto {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withIsExpired(isExpired: boolean): LabelSimpleDto {
        this['is_expired'] = isExpired;
        return this;
    }
    public set isExpired(isExpired: boolean  | undefined) {
        this['is_expired'] = isExpired;
    }
    public get isExpired(): boolean | undefined {
        return this['is_expired'];
    }
}