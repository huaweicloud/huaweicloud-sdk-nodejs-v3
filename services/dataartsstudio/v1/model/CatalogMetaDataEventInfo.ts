

export class CatalogMetaDataEventInfo {
    private 'event_ts'?: number;
    private 'event_type'?: CatalogMetaDataEventInfoEventTypeEnum | string;
    private 'event_message'?: object;
    public constructor() { 
    }
    public withEventTs(eventTs: number): CatalogMetaDataEventInfo {
        this['event_ts'] = eventTs;
        return this;
    }
    public set eventTs(eventTs: number  | undefined) {
        this['event_ts'] = eventTs;
    }
    public get eventTs(): number | undefined {
        return this['event_ts'];
    }
    public withEventType(eventType: CatalogMetaDataEventInfoEventTypeEnum | string): CatalogMetaDataEventInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: CatalogMetaDataEventInfoEventTypeEnum | string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): CatalogMetaDataEventInfoEventTypeEnum | string | undefined {
        return this['event_type'];
    }
    public withEventMessage(eventMessage: object): CatalogMetaDataEventInfo {
        this['event_message'] = eventMessage;
        return this;
    }
    public set eventMessage(eventMessage: object  | undefined) {
        this['event_message'] = eventMessage;
    }
    public get eventMessage(): object | undefined {
        return this['event_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CatalogMetaDataEventInfoEventTypeEnum {
    ADDFOREIGNKEYEVENT = 'AddForeignKeyEvent',
    ADDNOTNULLCONSTRAINTEVENT = 'AddNotNullConstraintEvent',
    ADDPRIMARYKEYEVENT = 'AddPrimaryKeyEvent',
    ADDUNIQUECONSTRAINTEVENT = 'AddUniqueConstraintEvent',
    ALTERDATABASEEVENT = 'AlterDatabaseEvent',
    ADDPARTITIONEVENT = 'AddPartitionEvent',
    ALTERPARTITIONEVENT = 'AlterPartitionEvent',
    ALTERTABLEEVENT = 'AlterTableEvent',
    ALTERCATALOGEVENT = 'AlterCatalogEvent',
    CREATECATALOGEVENT = 'CreateCatalogEvent',
    CREATEDATABASEEVENT = 'CreateDatabaseEvent',
    CREATEFUNCTIONEVENT = 'CreateFunctionEvent',
    CREATETABLEEVENT = 'CreateTableEvent',
    DROPCONSTRAINTEVENT = 'DropConstraintEvent',
    DROPDATABASEEVENT = 'DropDatabaseEvent',
    DROPFUNCTIONEVENT = 'DropFunctionEvent',
    DROPPARTITIONEVENT = 'DropPartitionEvent',
    DROPTABLEEVENT = 'DropTableEvent',
    DROPCATALOGEVENT = 'DropCatalogEvent',
    ADDINDEXEVENT = 'AddIndexEvent',
    ALTERINDEXEVENT = 'AlterIndexEvent',
    DROPINDEXEVENT = 'DropIndexEvent',
    ALTERSCHEMAEVENT = 'AlterSchemaEvent',
    CREATESCHEMAEVENT = 'CreateSchemaEvent',
    DROPSCHEMAEVENT = 'DropSchemaEvent',
    ALTERCOLUMNEVENT = 'AlterColumnEvent',
    ADDCOLUMNEVENT = 'AddColumnEvent',
    DROPCOLUMNEVENT = 'DropColumnEvent',
    ALTERTRIGGEREVENT = 'AlterTriggerEvent',
    ADDTRIGGEREVENT = 'AddTriggerEvent',
    DROPTRIGGEREVENT = 'DropTriggerEvent'
}
