import { DirectoryVO } from './DirectoryVO';


export class CreateDirectoryResultData {
    public value?: DirectoryVO;
    public constructor() { 
    }
    public withValue(value: DirectoryVO): CreateDirectoryResultData {
        this['value'] = value;
        return this;
    }
}