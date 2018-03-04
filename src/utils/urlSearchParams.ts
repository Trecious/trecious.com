class URLSearchParams implements URLSearchParamsType{
    [variable:string]: any;

    public count: number;
    public entries: {variable: string; value: string;}[];

    constructor(params: string){
        Object.defineProperty(this, "count",{
            get: function () {

                return Object.keys(this).length;
            }
        });
        Object.defineProperty(this, "entries",{
            get: function () {
                let entries: {variable: string; value: string;}[] = [];
                Object.keys(this).forEach(value => {
                    entries.push({
                        variable: value,
                        value: this[value]
                    });
                });
                if(entries == [])
                    return undefined;
                return entries;
            }
        });

        if(window.location.search.includes("?")){
            let regex = /[?&]([^=#]+)=([^&#]*)/g,
                url = window.location.search,
                match;
            while(match = regex.exec(url)) {
                this[match[1]] = match[2];
            }
        }
    }

    public updateQueryUrl(){
        let query: string = "?";
        Object.keys(this).forEach(value => {
            query += value + "=" + this[value] + "&";
        });
        window.location.search = query.substring(0, query.length - 1);
    }

    public addEntry(entry: {variable: string; value: string;}) {
        this[entry.variable] = entry.value;
    }

    public addEntries(entries: {variable: string; value: string;}[]) {
        entries.forEach(value => this[value.variable] = value.value)
    }

    public removeEntry(variable: string) {
        if(this.count != 0)
            delete this[variable];
    }

    public removeEntries(variables: string[]) {
        if(this.count != 0)
            variables.forEach(value => delete this[value]);
    }
}

interface URLSearchParamsDic{
    [variable: string]: string;
}

type URLSearchParamsType = URLSearchParamsDic &{
    count: number;
    entries: {variable: string, value: string}[];
    updateQueryUrl: () => void;
    addEntry: (entry: {variable: string; value: string;}) => void;
    addEntries: (entries: {variable: string; value: string;}[]) => void;
    removeEntry: (variable: string) => void;
    removeEntries: (variables: string[]) => void;
}

const urlQuery: URLSearchParamsType = new URLSearchParams(location.search)

export default urlQuery;
