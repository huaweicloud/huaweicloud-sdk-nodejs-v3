

export class PageInfo {
    public endRow?: number;
    public hasNextPage?: boolean;
    public hasPreviousPage?: boolean;
    public isFirstPage?: boolean;
    public isLastPage?: boolean;
    public list?: Array<object>;
    public navigateFirstPage?: number;
    public navigateLastPage?: number;
    public navigatePages?: number;
    public navigatepageNums?: Array<number>;
    public nextPage?: number;
    public pageNum?: number;
    public pageSize?: number;
    public pages?: number;
    public prePage?: number;
    public size?: number;
    public startRow?: number;
    public total?: number;
    public constructor() { 
    }
    public withEndRow(endRow: number): PageInfo {
        this['endRow'] = endRow;
        return this;
    }
    public withHasNextPage(hasNextPage: boolean): PageInfo {
        this['hasNextPage'] = hasNextPage;
        return this;
    }
    public withHasPreviousPage(hasPreviousPage: boolean): PageInfo {
        this['hasPreviousPage'] = hasPreviousPage;
        return this;
    }
    public withIsFirstPage(isFirstPage: boolean): PageInfo {
        this['isFirstPage'] = isFirstPage;
        return this;
    }
    public withIsLastPage(isLastPage: boolean): PageInfo {
        this['isLastPage'] = isLastPage;
        return this;
    }
    public withList(list: Array<object>): PageInfo {
        this['list'] = list;
        return this;
    }
    public withNavigateFirstPage(navigateFirstPage: number): PageInfo {
        this['navigateFirstPage'] = navigateFirstPage;
        return this;
    }
    public withNavigateLastPage(navigateLastPage: number): PageInfo {
        this['navigateLastPage'] = navigateLastPage;
        return this;
    }
    public withNavigatePages(navigatePages: number): PageInfo {
        this['navigatePages'] = navigatePages;
        return this;
    }
    public withNavigatepageNums(navigatepageNums: Array<number>): PageInfo {
        this['navigatepageNums'] = navigatepageNums;
        return this;
    }
    public withNextPage(nextPage: number): PageInfo {
        this['nextPage'] = nextPage;
        return this;
    }
    public withPageNum(pageNum: number): PageInfo {
        this['pageNum'] = pageNum;
        return this;
    }
    public withPageSize(pageSize: number): PageInfo {
        this['pageSize'] = pageSize;
        return this;
    }
    public withPages(pages: number): PageInfo {
        this['pages'] = pages;
        return this;
    }
    public withPrePage(prePage: number): PageInfo {
        this['prePage'] = prePage;
        return this;
    }
    public withSize(size: number): PageInfo {
        this['size'] = size;
        return this;
    }
    public withStartRow(startRow: number): PageInfo {
        this['startRow'] = startRow;
        return this;
    }
    public withTotal(total: number): PageInfo {
        this['total'] = total;
        return this;
    }
}