export interface Location {
    street_address : string,
    city : string,
    zip : number,
    state : string,
    country : string,
    lat : number,
    long : number
}

export function isValidLocation(obj : any): boolean {
    return obj.street_address !== undefined &&
            obj.city !== undefined &&
            obj.zip !== undefined &&
            obj.state !== undefined &&
            obj.country !== undefined &&
            obj.lat !== undefined &&
            obj.long !== undefined;
}