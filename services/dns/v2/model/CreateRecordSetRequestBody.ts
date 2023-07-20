import { Tag } from './Tag';


export class CreateRecordSetRequestBody {
    public name?: string;
    public description?: string;
    public type?: string;
    public status?: string;
    public ttl?: number;
    public records?: Array<string>;
    public tags?: Array<Tag>;
    public constructor(name?: string, type?: string, records?: Array<string>) { 
        this['name'] = name;
        this['type'] = type;
        this['records'] = records;
    }
    public withName(name: string): CreateRecordSetRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateRecordSetRequestBody {
        this['description'] = description;
        return this;
    }
    public withType(type: string): CreateRecordSetRequestBody {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): CreateRecordSetRequestBody {
        this['status'] = status;
        return this;
    }
    public withTtl(ttl: number): CreateRecordSetRequestBody {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): CreateRecordSetRequestBody {
        this['records'] = records;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateRecordSetRequestBody {
        this['tags'] = tags;
        return this;
    }
}