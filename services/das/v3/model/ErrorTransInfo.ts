

export class ErrorTransInfo {
    public id?: number;
    private 'file_name'?: string;
    private 'object_key'?: string;
    private 'begin_position'?: number;
    private 'end_position'?: number;
    private 'db_name'?: string;
    private 'tb_name'?: string;
    private 'create_time'?: Date;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withId(id: number): ErrorTransInfo {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): ErrorTransInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withObjectKey(objectKey: string): ErrorTransInfo {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: string  | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey(): string | undefined {
        return this['object_key'];
    }
    public withBeginPosition(beginPosition: number): ErrorTransInfo {
        this['begin_position'] = beginPosition;
        return this;
    }
    public set beginPosition(beginPosition: number  | undefined) {
        this['begin_position'] = beginPosition;
    }
    public get beginPosition(): number | undefined {
        return this['begin_position'];
    }
    public withEndPosition(endPosition: number): ErrorTransInfo {
        this['end_position'] = endPosition;
        return this;
    }
    public set endPosition(endPosition: number  | undefined) {
        this['end_position'] = endPosition;
    }
    public get endPosition(): number | undefined {
        return this['end_position'];
    }
    public withDbName(dbName: string): ErrorTransInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTbName(tbName: string): ErrorTransInfo {
        this['tb_name'] = tbName;
        return this;
    }
    public set tbName(tbName: string  | undefined) {
        this['tb_name'] = tbName;
    }
    public get tbName(): string | undefined {
        return this['tb_name'];
    }
    public withCreateTime(createTime: Date): ErrorTransInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withErrorMsg(errorMsg: string): ErrorTransInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}