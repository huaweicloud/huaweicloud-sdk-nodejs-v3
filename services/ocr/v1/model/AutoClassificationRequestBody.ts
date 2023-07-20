

export class AutoClassificationRequestBody {
    public image?: string;
    public url?: string;
    private 'type_list'?: Array<string>;
    private 'extended_parameters'?: object;
    public constructor() { 
    }
    public withImage(image: string): AutoClassificationRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): AutoClassificationRequestBody {
        this['url'] = url;
        return this;
    }
    public withTypeList(typeList: Array<string>): AutoClassificationRequestBody {
        this['type_list'] = typeList;
        return this;
    }
    public set typeList(typeList: Array<string>  | undefined) {
        this['type_list'] = typeList;
    }
    public get typeList(): Array<string> | undefined {
        return this['type_list'];
    }
    public withExtendedParameters(extendedParameters: object): AutoClassificationRequestBody {
        this['extended_parameters'] = extendedParameters;
        return this;
    }
    public set extendedParameters(extendedParameters: object  | undefined) {
        this['extended_parameters'] = extendedParameters;
    }
    public get extendedParameters(): object | undefined {
        return this['extended_parameters'];
    }
}