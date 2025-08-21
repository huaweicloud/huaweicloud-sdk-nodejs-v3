

export class ActionDto {
    public action?: ActionDtoActionEnum | string;
    private 'file_path'?: string;
    private 'previous_path'?: string;
    public content?: string;
    public encoding?: string;
    private 'last_commit_id'?: boolean;
    private 'execute_filemode'?: boolean;
    public constructor(action?: string, filePath?: string) { 
        this['action'] = action;
        this['file_path'] = filePath;
    }
    public withAction(action: ActionDtoActionEnum | string): ActionDto {
        this['action'] = action;
        return this;
    }
    public withFilePath(filePath: string): ActionDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withPreviousPath(previousPath: string): ActionDto {
        this['previous_path'] = previousPath;
        return this;
    }
    public set previousPath(previousPath: string  | undefined) {
        this['previous_path'] = previousPath;
    }
    public get previousPath(): string | undefined {
        return this['previous_path'];
    }
    public withContent(content: string): ActionDto {
        this['content'] = content;
        return this;
    }
    public withEncoding(encoding: string): ActionDto {
        this['encoding'] = encoding;
        return this;
    }
    public withLastCommitId(lastCommitId: boolean): ActionDto {
        this['last_commit_id'] = lastCommitId;
        return this;
    }
    public set lastCommitId(lastCommitId: boolean  | undefined) {
        this['last_commit_id'] = lastCommitId;
    }
    public get lastCommitId(): boolean | undefined {
        return this['last_commit_id'];
    }
    public withExecuteFilemode(executeFilemode: boolean): ActionDto {
        this['execute_filemode'] = executeFilemode;
        return this;
    }
    public set executeFilemode(executeFilemode: boolean  | undefined) {
        this['execute_filemode'] = executeFilemode;
    }
    public get executeFilemode(): boolean | undefined {
        return this['execute_filemode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ActionDtoActionEnum {
    CREATE = 'create',
    CREATE_DIR = 'create_dir',
    UPDATE = 'update',
    MOVE = 'move',
    DELETE = 'delete',
    CHMOD = 'chmod'
}
