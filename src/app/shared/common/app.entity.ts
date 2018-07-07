export class HttpReq {
    url: string;
    type: string;
    showLoader: boolean = false;
    body: any = {};
}
export interface ErrorMessage{
    code: string;
    message: string;
}