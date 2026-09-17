import { IteratorVersionInfo } from './IteratorVersionInfo';


export class UpdateTestIteratorRequest {
    private 'iterator_uri'?: string;
    public body?: IteratorVersionInfo;
    public constructor(iteratorUri?: string) { 
        this['iterator_uri'] = iteratorUri;
    }
    public withIteratorUri(iteratorUri: string): UpdateTestIteratorRequest {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
    public withBody(body: IteratorVersionInfo): UpdateTestIteratorRequest {
        this['body'] = body;
        return this;
    }
}