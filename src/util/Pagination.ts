import {  Request } from "express";
export interface QueryParamsContract {
    limit: number;
    offset: number;
    page: number;
}

export interface PaginationData {
    currentPage: number;
    data;
    from: number;
    perPage: number;
    to: number;
    total: number;
    lastPage: number;
}
export class Pagination {
    perPage: number;
    totalCount: number;
    currentPage: number;
    previousPage: number;
    nextPage: number;
    pageCount: number;
    pageUri;
    offset: number;
    sidePages: number;
    pages: string;

    constructor(totalCount = 1,currentPage = 1,pageUri = '',perPage=15){
        this.perPage = perPage;
        this.totalCount =parseInt(totalCount.toString());
        this.currentPage = parseInt(currentPage.toString());
        this.previousPage = this.currentPage - 1;
        this.nextPage = this.currentPage + 1;
        this.pageCount = Math.ceil(this.totalCount / this.perPage);
        this.pageUri = pageUri;
        this.offset  = this.currentPage > 1 ? this.previousPage * this.perPage : 0;
        this.sidePages = 4;
        this.pages = "";
    }

    public static  getQueryParams(req: Request): QueryParamsContract {
        const limit = req.query.limit   || 10;
        const page  = req.query.page    || 1;
        const p = parseInt(page.toString());
        const l = parseInt(limit.toString());
        const offset  = ((p * l)) - l;
        return <QueryParamsContract>{
            limit,
            offset,
            page
        };
    }
    public static getData(req: Request, records, totaCount: number){
        const params = this.getQueryParams(req);
        return <PaginationData> {
            currentPage: parseFloat(params.page.toString()),
            data: records,
            total: totaCount,
            from: parseInt(params.offset.toString()) + 1,
            perPage: params.limit,
            lastPage: Math.ceil(totaCount / params.limit),
            to: params.page * params.limit
        }
    }
}
