import { AliasTarget } from './AliasTarget';
import { Tag } from './Tag';


export class CreateRecordSetWithLineRequestBody {
    public name?: string;
    public description?: string;
    public type?: string;
    public status?: string;
    public ttl?: number;
    public records?: Array<string>;
    public line?: string;
    public tags?: Array<Tag>;
    public weight?: number;
    private 'alias_target'?: AliasTarget;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): CreateRecordSetWithLineRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateRecordSetWithLineRequestBody {
        this['description'] = description;
        return this;
    }
    public withType(type: string): CreateRecordSetWithLineRequestBody {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): CreateRecordSetWithLineRequestBody {
        this['status'] = status;
        return this;
    }
    public withTtl(ttl: number): CreateRecordSetWithLineRequestBody {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): CreateRecordSetWithLineRequestBody {
        this['records'] = records;
        return this;
    }
    public withLine(line: string): CreateRecordSetWithLineRequestBody {
        this['line'] = line;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateRecordSetWithLineRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withWeight(weight: number): CreateRecordSetWithLineRequestBody {
        this['weight'] = weight;
        return this;
    }
    public withAliasTarget(aliasTarget: AliasTarget): CreateRecordSetWithLineRequestBody {
        this['alias_target'] = aliasTarget;
        return this;
    }
    public set aliasTarget(aliasTarget: AliasTarget  | undefined) {
        this['alias_target'] = aliasTarget;
    }
    public get aliasTarget(): AliasTarget | undefined {
        return this['alias_target'];
    }
}