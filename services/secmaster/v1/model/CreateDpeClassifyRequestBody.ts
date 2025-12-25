import { DpeClassifyCreate } from './DpeClassifyCreate';


export class CreateDpeClassifyRequestBody {
    public id?: string;
    public name?: string;
    private 'dataclass_id'?: string;
    private 'data_source'?: string;
    public description?: string;
    public classifier?: DpeClassifyCreate;
    public constructor(id?: string, name?: string, dataclassId?: string, dataSource?: string, description?: string, classifier?: DpeClassifyCreate) { 
        this['id'] = id;
        this['name'] = name;
        this['dataclass_id'] = dataclassId;
        this['data_source'] = dataSource;
        this['description'] = description;
        this['classifier'] = classifier;
    }
    public withId(id: string): CreateDpeClassifyRequestBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateDpeClassifyRequestBody {
        this['name'] = name;
        return this;
    }
    public withDataclassId(dataclassId: string): CreateDpeClassifyRequestBody {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDataSource(dataSource: string): CreateDpeClassifyRequestBody {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: string  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): string | undefined {
        return this['data_source'];
    }
    public withDescription(description: string): CreateDpeClassifyRequestBody {
        this['description'] = description;
        return this;
    }
    public withClassifier(classifier: DpeClassifyCreate): CreateDpeClassifyRequestBody {
        this['classifier'] = classifier;
        return this;
    }
}