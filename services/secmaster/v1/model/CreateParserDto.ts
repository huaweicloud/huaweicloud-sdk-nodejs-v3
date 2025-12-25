import { CreateModuleVo } from './CreateModuleVo';


export class CreateParserDto {
    public description?: string;
    public modules?: Array<CreateModuleVo>;
    private 'parser_id'?: string;
    public title?: string;
    public constructor(title?: string) { 
        this['title'] = title;
    }
    public withDescription(description: string): CreateParserDto {
        this['description'] = description;
        return this;
    }
    public withModules(modules: Array<CreateModuleVo>): CreateParserDto {
        this['modules'] = modules;
        return this;
    }
    public withParserId(parserId: string): CreateParserDto {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
    public withTitle(title: string): CreateParserDto {
        this['title'] = title;
        return this;
    }
}