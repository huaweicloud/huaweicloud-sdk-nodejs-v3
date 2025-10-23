
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RenameFileResponse extends SdkResponse {
    private 'file_path'?: string;
    public branch?: string;
    public constructor() { 
        super();
    }
    public withFilePath(filePath: string): RenameFileResponse {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withBranch(branch: string): RenameFileResponse {
        this['branch'] = branch;
        return this;
    }
}