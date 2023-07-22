/* eslint-disable no-param-reassign */
import Axios from 'axios';

export async function getCfContest() {
    const url = 'https://codeforces.com/api/contest.list?gym=false';
    return new Promise((resolve) => {
        Axios.get(url)
            .then((res) => {
                if (res && res.data && res.data.status === 'OK') {
                    const {result} = res.data;
                    resolve(result);
                }
                resolve([]);
            })
            .catch(() => {
                resolve([]);
            });
    });
}

const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export async function getCfUserInfo(username) {
    await sleep(300);
    const url = `https://codeforces.com/api/user.status?handle=${username}`;
    return new Promise((resolve, reject) => {
        Axios.get(url)
            .then((res) => {
                if (res.data.status === 'OK') {
                    const {result} = res.data;
                    resolve(result);
                }
                reject(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
