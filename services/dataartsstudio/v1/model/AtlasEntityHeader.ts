import { AtlasClassificationInfo } from './AtlasClassificationInfo';
import { TermAssignmentHeader } from './TermAssignmentHeader';


export class AtlasEntityHeader {
    private 'type_name'?: string;
    public guid?: string;
    public name?: string;
    private 'display_text'?: string;
    public status?: string;
    private 'classification_names'?: Array<string>;
    public classifications?: Array<AtlasClassificationInfo>;
    private 'meaning_names'?: Array<string>;
    public meanings?: Array<TermAssignmentHeader>;
    public children?: object;
    public attributes?: object;
    public constructor() { 
    }
    public withTypeName(typeName: string): AtlasEntityHeader {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withGuid(guid: string): AtlasEntityHeader {
        this['guid'] = guid;
        return this;
    }
    public withName(name: string): AtlasEntityHeader {
        this['name'] = name;
        return this;
    }
    public withDisplayText(displayText: string): AtlasEntityHeader {
        this['display_text'] = displayText;
        return this;
    }
    public set displayText(displayText: string  | undefined) {
        this['display_text'] = displayText;
    }
    public get displayText(): string | undefined {
        return this['display_text'];
    }
    public withStatus(status: string): AtlasEntityHeader {
        this['status'] = status;
        return this;
    }
    public withClassificationNames(classificationNames: Array<string>): AtlasEntityHeader {
        this['classification_names'] = classificationNames;
        return this;
    }
    public set classificationNames(classificationNames: Array<string>  | undefined) {
        this['classification_names'] = classificationNames;
    }
    public get classificationNames(): Array<string> | undefined {
        return this['classification_names'];
    }
    public withClassifications(classifications: Array<AtlasClassificationInfo>): AtlasEntityHeader {
        this['classifications'] = classifications;
        return this;
    }
    public withMeaningNames(meaningNames: Array<string>): AtlasEntityHeader {
        this['meaning_names'] = meaningNames;
        return this;
    }
    public set meaningNames(meaningNames: Array<string>  | undefined) {
        this['meaning_names'] = meaningNames;
    }
    public get meaningNames(): Array<string> | undefined {
        return this['meaning_names'];
    }
    public withMeanings(meanings: Array<TermAssignmentHeader>): AtlasEntityHeader {
        this['meanings'] = meanings;
        return this;
    }
    public withChildren(children: object): AtlasEntityHeader {
        this['children'] = children;
        return this;
    }
    public withAttributes(attributes: object): AtlasEntityHeader {
        this['attributes'] = attributes;
        return this;
    }
}