import { Content } from './Content';


export class Artifact {
    public content?: Content;
    public type?: string;
    public constructor() { 
    }
    public withContent(content: Content): Artifact {
        this['content'] = content;
        return this;
    }
    public withType(type: string): Artifact {
        this['type'] = type;
        return this;
    }
}