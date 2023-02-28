export const Logger = (err: unknown, from: string, method: string) => {
    console.log('Error from ' + from + ` ( method: ${method}): ` + err);
};
