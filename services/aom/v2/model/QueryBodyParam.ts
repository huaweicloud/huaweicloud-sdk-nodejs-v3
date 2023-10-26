import { SearchKey } from './SearchKey';


export class QueryBodyParam {
    public category?: string;
    public endTime?: number;
    public hideSyslog?: number;
    public keyWord?: string;
    public lineNum?: string;
    private 'pageSize/size'?: string;
    public searchKey?: SearchKey;
    public startTime?: number;
    public type?: string;
    public isDesc?: boolean;
    public constructor(category?: string, endTime?: number, searchKey?: SearchKey, startTime?: number) { 
        this['category'] = category;
        this['endTime'] = endTime;
        this['searchKey'] = searchKey;
        this['startTime'] = startTime;
    }
    public withCategory(category: string): QueryBodyParam {
        this['category'] = category;
        return this;
    }
    public withEndTime(endTime: number): QueryBodyParam {
        this['endTime'] = endTime;
        return this;
    }
    public withHideSyslog(hideSyslog: number): QueryBodyParam {
        this['hideSyslog'] = hideSyslog;
        return this;
    }
    public withKeyWord(keyWord: string): QueryBodyParam {
        this['keyWord'] = keyWord;
        return this;
    }
    public withLineNum(lineNum: string): QueryBodyParam {
        this['lineNum'] = lineNum;
        return this;
    }
    public withPageSizeSize(pageSizeSize: string): QueryBodyParam {
        this['pageSize/size'] = pageSizeSize;
        return this;
    }
    public set pageSizeSize(pageSizeSize: string  | undefined) {
        this['pageSize/size'] = pageSizeSize;
    }
    public get pageSizeSize(): string | undefined {
        return this['pageSize/size'];
    }
    public withSearchKey(searchKey: SearchKey): QueryBodyParam {
        this['searchKey'] = searchKey;
        return this;
    }
    public withStartTime(startTime: number): QueryBodyParam {
        this['startTime'] = startTime;
        return this;
    }
    public withType(type: string): QueryBodyParam {
        this['type'] = type;
        return this;
    }
    public withIsDesc(isDesc: boolean): QueryBodyParam {
        this['isDesc'] = isDesc;
        return this;
    }
}