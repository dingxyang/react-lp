import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";

function MassiveData() {
    const [pageIndex, setPageIndex] = useState(1);
    const limit = 20; // 一页展示

    const [data, setData] = useState([]);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        axios.get("http://localhost:7000/").then((res) => {
            setData(res.data)
        });
    }, []);

    const showList = useMemo(() => {
        if (data?.length) {
            return data.slice(0, pageIndex * limit)
        }
        return []
    }, [pageIndex, data])

    const maxPage =
        useMemo(() => {
            if (data?.length) {
                return data.length / limit
            }
            return 1
        }, [data])


    const handleScroll = () => {
        if (pageIndex >= maxPage) return
        const blankTop = ref.current?.getBoundingClientRect().top;
        if (blankTop && 700 + 54.5 >= blankTop) {
            // blank出现在视图，则当前页数加1
            setPageIndex(pageIndex => pageIndex + 1)
        }
    };

    return (
        <div style={{ height: '700px', overflow: 'auto' }} onScroll={handleScroll}>
            <div >
                {showList.map(item => {
                    return (
                        <p>
                            <img src={item.src} width={100} height={100} />
                            <span>{item.text}</span>
                        </p>
                    )
                })}

            </div>
            <div id="blank" ref={ref}></div>
        </div>
    )
}

export default MassiveData;
