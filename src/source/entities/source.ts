export interface makeSourceProps {
    source: string
}

export type makeSourceType = ReturnType<typeof buildMakeSource>;

export default function buildMakeSource (
        {} 
    )  {
        return function makeSource (
            {source} : makeSourceProps
        ) {
            return {source};
        }
};


