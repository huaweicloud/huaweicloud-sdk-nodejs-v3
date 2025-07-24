import { AttributeChange } from './AttributeChange';
import { NameAndId } from './NameAndId';


export class TestPlanJournalDetail {
    public updated?: Array<AttributeChange>;
    public added?: Array<NameAndId>;
    public deleted?: Array<NameAndId>;
    private 'journalized_type'?: string;
    public type?: string;
    public constructor() { 
    }
    public withUpdated(updated: Array<AttributeChange>): TestPlanJournalDetail {
        this['updated'] = updated;
        return this;
    }
    public withAdded(added: Array<NameAndId>): TestPlanJournalDetail {
        this['added'] = added;
        return this;
    }
    public withDeleted(deleted: Array<NameAndId>): TestPlanJournalDetail {
        this['deleted'] = deleted;
        return this;
    }
    public withJournalizedType(journalizedType: string): TestPlanJournalDetail {
        this['journalized_type'] = journalizedType;
        return this;
    }
    public set journalizedType(journalizedType: string  | undefined) {
        this['journalized_type'] = journalizedType;
    }
    public get journalizedType(): string | undefined {
        return this['journalized_type'];
    }
    public withType(type: string): TestPlanJournalDetail {
        this['type'] = type;
        return this;
    }
}