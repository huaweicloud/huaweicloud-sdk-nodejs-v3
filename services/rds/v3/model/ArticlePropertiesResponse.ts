

export class ArticlePropertiesResponse {
    private 'destination_object_name'?: string;
    private 'destination_object_owner'?: string;
    private 'insert_delivery_format'?: ArticlePropertiesResponseInsertDeliveryFormatEnum | string;
    private 'insert_stored_procedure'?: string;
    private 'update_delivery_format'?: ArticlePropertiesResponseUpdateDeliveryFormatEnum | string;
    private 'update_stored_procedure'?: string;
    private 'delete_delivery_format'?: ArticlePropertiesResponseDeleteDeliveryFormatEnum | string;
    private 'delete_stored_procedure'?: string;
    public constructor() { 
    }
    public withDestinationObjectName(destinationObjectName: string): ArticlePropertiesResponse {
        this['destination_object_name'] = destinationObjectName;
        return this;
    }
    public set destinationObjectName(destinationObjectName: string  | undefined) {
        this['destination_object_name'] = destinationObjectName;
    }
    public get destinationObjectName(): string | undefined {
        return this['destination_object_name'];
    }
    public withDestinationObjectOwner(destinationObjectOwner: string): ArticlePropertiesResponse {
        this['destination_object_owner'] = destinationObjectOwner;
        return this;
    }
    public set destinationObjectOwner(destinationObjectOwner: string  | undefined) {
        this['destination_object_owner'] = destinationObjectOwner;
    }
    public get destinationObjectOwner(): string | undefined {
        return this['destination_object_owner'];
    }
    public withInsertDeliveryFormat(insertDeliveryFormat: ArticlePropertiesResponseInsertDeliveryFormatEnum | string): ArticlePropertiesResponse {
        this['insert_delivery_format'] = insertDeliveryFormat;
        return this;
    }
    public set insertDeliveryFormat(insertDeliveryFormat: ArticlePropertiesResponseInsertDeliveryFormatEnum | string  | undefined) {
        this['insert_delivery_format'] = insertDeliveryFormat;
    }
    public get insertDeliveryFormat(): ArticlePropertiesResponseInsertDeliveryFormatEnum | string | undefined {
        return this['insert_delivery_format'];
    }
    public withInsertStoredProcedure(insertStoredProcedure: string): ArticlePropertiesResponse {
        this['insert_stored_procedure'] = insertStoredProcedure;
        return this;
    }
    public set insertStoredProcedure(insertStoredProcedure: string  | undefined) {
        this['insert_stored_procedure'] = insertStoredProcedure;
    }
    public get insertStoredProcedure(): string | undefined {
        return this['insert_stored_procedure'];
    }
    public withUpdateDeliveryFormat(updateDeliveryFormat: ArticlePropertiesResponseUpdateDeliveryFormatEnum | string): ArticlePropertiesResponse {
        this['update_delivery_format'] = updateDeliveryFormat;
        return this;
    }
    public set updateDeliveryFormat(updateDeliveryFormat: ArticlePropertiesResponseUpdateDeliveryFormatEnum | string  | undefined) {
        this['update_delivery_format'] = updateDeliveryFormat;
    }
    public get updateDeliveryFormat(): ArticlePropertiesResponseUpdateDeliveryFormatEnum | string | undefined {
        return this['update_delivery_format'];
    }
    public withUpdateStoredProcedure(updateStoredProcedure: string): ArticlePropertiesResponse {
        this['update_stored_procedure'] = updateStoredProcedure;
        return this;
    }
    public set updateStoredProcedure(updateStoredProcedure: string  | undefined) {
        this['update_stored_procedure'] = updateStoredProcedure;
    }
    public get updateStoredProcedure(): string | undefined {
        return this['update_stored_procedure'];
    }
    public withDeleteDeliveryFormat(deleteDeliveryFormat: ArticlePropertiesResponseDeleteDeliveryFormatEnum | string): ArticlePropertiesResponse {
        this['delete_delivery_format'] = deleteDeliveryFormat;
        return this;
    }
    public set deleteDeliveryFormat(deleteDeliveryFormat: ArticlePropertiesResponseDeleteDeliveryFormatEnum | string  | undefined) {
        this['delete_delivery_format'] = deleteDeliveryFormat;
    }
    public get deleteDeliveryFormat(): ArticlePropertiesResponseDeleteDeliveryFormatEnum | string | undefined {
        return this['delete_delivery_format'];
    }
    public withDeleteStoredProcedure(deleteStoredProcedure: string): ArticlePropertiesResponse {
        this['delete_stored_procedure'] = deleteStoredProcedure;
        return this;
    }
    public set deleteStoredProcedure(deleteStoredProcedure: string  | undefined) {
        this['delete_stored_procedure'] = deleteStoredProcedure;
    }
    public get deleteStoredProcedure(): string | undefined {
        return this['delete_stored_procedure'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ArticlePropertiesResponseInsertDeliveryFormatEnum {
    DO_NOT_INSERT = 'do_not_insert',
    INSERT = 'insert',
    INSERT_WITHOUT_COLUMN_LIST = 'insert_without_column_list',
    CALL_PROCEDURE = 'call_procedure'
}
/**
    * @export
    * @enum {string}
    */
export enum ArticlePropertiesResponseUpdateDeliveryFormatEnum {
    DO_NOT_UPDATE = 'do_not_update',
    UPDATE = 'update',
    CALL_PROCEDURE = 'call_procedure',
    MCALL_PROCEDURE = 'mcall_procedure',
    XCALL_PROCEDURE = 'xcall_procedure',
    SCALL_PROCEDURE = 'scall_procedure'
}
/**
    * @export
    * @enum {string}
    */
export enum ArticlePropertiesResponseDeleteDeliveryFormatEnum {
    DO_NOT_DELETE = 'do_not_delete',
    DELETE = 'delete',
    CALL_PROCEDURE = 'call_procedure',
    XCALL_PROCEDURE = 'xcall_procedure'
}
