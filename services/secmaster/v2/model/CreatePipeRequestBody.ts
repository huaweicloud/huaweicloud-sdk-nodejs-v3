import { PipeCategory } from './PipeCategory';
import { PipeSchema } from './PipeSchema';
import { PipeStorageSetting } from './PipeStorageSetting';
import { TableDisplaySetting } from './TableDisplaySetting';


export class CreatePipeRequestBody {
    private 'pipe_name'?: string;
    private 'pipe_alias'?: string;
    public category?: PipeCategory;
    public directory?: string;
    public description?: string;
    public schema?: PipeSchema;
    private 'storage_setting'?: PipeStorageSetting;
    private 'display_setting'?: TableDisplaySetting;
    public constructor(pipeName?: string, pipeAlias?: string, category?: PipeCategory, schema?: PipeSchema, storageSetting?: PipeStorageSetting) { 
        this['pipe_name'] = pipeName;
        this['pipe_alias'] = pipeAlias;
        this['category'] = category;
        this['schema'] = schema;
        this['storage_setting'] = storageSetting;
    }
    public withPipeName(pipeName: string): CreatePipeRequestBody {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withPipeAlias(pipeAlias: string): CreatePipeRequestBody {
        this['pipe_alias'] = pipeAlias;
        return this;
    }
    public set pipeAlias(pipeAlias: string  | undefined) {
        this['pipe_alias'] = pipeAlias;
    }
    public get pipeAlias(): string | undefined {
        return this['pipe_alias'];
    }
    public withCategory(category: PipeCategory): CreatePipeRequestBody {
        this['category'] = category;
        return this;
    }
    public withDirectory(directory: string): CreatePipeRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): CreatePipeRequestBody {
        this['description'] = description;
        return this;
    }
    public withSchema(schema: PipeSchema): CreatePipeRequestBody {
        this['schema'] = schema;
        return this;
    }
    public withStorageSetting(storageSetting: PipeStorageSetting): CreatePipeRequestBody {
        this['storage_setting'] = storageSetting;
        return this;
    }
    public set storageSetting(storageSetting: PipeStorageSetting  | undefined) {
        this['storage_setting'] = storageSetting;
    }
    public get storageSetting(): PipeStorageSetting | undefined {
        return this['storage_setting'];
    }
    public withDisplaySetting(displaySetting: TableDisplaySetting): CreatePipeRequestBody {
        this['display_setting'] = displaySetting;
        return this;
    }
    public set displaySetting(displaySetting: TableDisplaySetting  | undefined) {
        this['display_setting'] = displaySetting;
    }
    public get displaySetting(): TableDisplaySetting | undefined {
        return this['display_setting'];
    }
}