

export class ErrorTable {
    public message?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'row_number'?: number;
    private 'full_description'?: string;
    public constructor() { 
    }
    public withMessage(message: string): ErrorTable {
        this['message'] = message;
        return this;
    }
    public withDatabaseName(databaseName: string): ErrorTable {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ErrorTable {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withRowNumber(rowNumber: number): ErrorTable {
        this['row_number'] = rowNumber;
        return this;
    }
    public set rowNumber(rowNumber: number  | undefined) {
        this['row_number'] = rowNumber;
    }
    public get rowNumber(): number | undefined {
        return this['row_number'];
    }
    public withFullDescription(fullDescription: string): ErrorTable {
        this['full_description'] = fullDescription;
        return this;
    }
    public set fullDescription(fullDescription: string  | undefined) {
        this['full_description'] = fullDescription;
    }
    public get fullDescription(): string | undefined {
        return this['full_description'];
    }
}