import { Connection } from './Connection';
import { TagHeader } from './TagHeader';


export class OpenEntityHeader {
    public attributes?: object;
    public connection?: Array<Connection>;
    private 'display_text'?: string;
    public guid?: string;
    private 'type_name'?: string;
    public tags?: Array<TagHeader>;
    private 'classification_names'?: Array<string>;
    public constructor() { 
    }
    public withAttributes(attributes: object): OpenEntityHeader {
        this['attributes'] = attributes;
        return this;
    }
    public withConnection(connection: Array<Connection>): OpenEntityHeader {
        this['connection'] = connection;
        return this;
    }
    public withDisplayText(displayText: string): OpenEntityHeader {
        this['display_text'] = displayText;
        return this;
    }
    public set displayText(displayText: string  | undefined) {
        this['display_text'] = displayText;
    }
    public get displayText(): string | undefined {
        return this['display_text'];
    }
    public withGuid(guid: string): OpenEntityHeader {
        this['guid'] = guid;
        return this;
    }
    public withTypeName(typeName: string): OpenEntityHeader {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withTags(tags: Array<TagHeader>): OpenEntityHeader {
        this['tags'] = tags;
        return this;
    }
    public withClassificationNames(classificationNames: Array<string>): OpenEntityHeader {
        this['classification_names'] = classificationNames;
        return this;
    }
    public set classificationNames(classificationNames: Array<string>  | undefined) {
        this['classification_names'] = classificationNames;
    }
    public get classificationNames(): Array<string> | undefined {
        return this['classification_names'];
    }
}