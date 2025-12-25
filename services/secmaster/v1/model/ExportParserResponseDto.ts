import { ShowModuleExportVo } from './ShowModuleExportVo';


export class ExportParserResponseDto {
    public description?: string;
    public modules?: Array<ShowModuleExportVo>;
    public title?: string;
    public constructor() { 
    }
    public withDescription(description: string): ExportParserResponseDto {
        this['description'] = description;
        return this;
    }
    public withModules(modules: Array<ShowModuleExportVo>): ExportParserResponseDto {
        this['modules'] = modules;
        return this;
    }
    public withTitle(title: string): ExportParserResponseDto {
        this['title'] = title;
        return this;
    }
}