

export class ResponseSourceDetailsDto {
    public source?: Array<string>;
    public constructor(source?: Array<string>) { 
        this['source'] = source;
    }
    public withSource(source: Array<string>): ResponseSourceDetailsDto {
        this['source'] = source;
        return this;
    }
}