import { UpdateImageGroupRequestBodyTags } from './UpdateImageGroupRequestBodyTags';


export class UpdateImageGroupRequestBody {
    private 'read_me'?: string;
    public tags?: Array<UpdateImageGroupRequestBodyTags>;
    public constructor() { 
    }
    public withReadMe(readMe: string): UpdateImageGroupRequestBody {
        this['read_me'] = readMe;
        return this;
    }
    public set readMe(readMe: string  | undefined) {
        this['read_me'] = readMe;
    }
    public get readMe(): string | undefined {
        return this['read_me'];
    }
    public withTags(tags: Array<UpdateImageGroupRequestBodyTags>): UpdateImageGroupRequestBody {
        this['tags'] = tags;
        return this;
    }
}