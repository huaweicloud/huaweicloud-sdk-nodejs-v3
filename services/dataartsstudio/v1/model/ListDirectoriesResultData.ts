import { DirectoryVO } from './DirectoryVO';


export class ListDirectoriesResultData {
    public value?: Array<DirectoryVO>;
    public constructor() { 
    }
    public withValue(value: Array<DirectoryVO>): ListDirectoriesResultData {
        this['value'] = value;
        return this;
    }
}