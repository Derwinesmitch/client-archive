import { useState } from "react";
import { useNavigate } from "react-router";

export default function FrontPage() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/archive?query=${encodeURIComponent(query)}`);
        console.log("search:", query);
    };

    return (
        <div className="flex min-h-screen items-center justify-center  px-6">
            <div className="w-full max-w-xl text-center">
                <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXUAAACHCAMAAADeDjlcAAAAkFBMVEX////iBhPhAAD3w8XpVFviABD53NzpWl7iAAfqYmf/+/ziAAznREn+8fLiAAX97u/zqKv51NbxnJ/86On4y83+9vf74+TtfIDvjI/1t7nkHCb62dvug4fyoqXmOUD0rrHsdHj4z9DwlpnlMjnra2/3xcfsb3TtfYH0s7bjERzkISnnR031vL7oT1XlKzPpXmK14UNFAAARBElEQVR4nO1da2OqOtOVKIriXbHWWrXqbotW+///3QuSCQFzmVzc5zzvcX1r1RAWYW6ZmTQaHpD8jL9ah1UQrDaX43r63fYx6H8Nk043x+8a9e32fkMyRHEQBGEckRv66/GiJ/p2MXS38+ZjorvfnfAihqD32/3kBlu0unocd+vlcj/9ns+SxHkizYI5ctF/tffazwgP6ghz8jf7xf0PvujYn66TzPCWjfPhYZwjndOS+1+bmCHd7PY/s4HDLJrkRh1pab/5cxBQDsiYb22T2i/axdhxOnKYIMULCcjOfZhZGN5WCuEXCZ0nGrd1RlaX9dyWeSzr7ZaC8+JGyGla4/0yLAYfW06uRI+E2RVclleBKb3dX/6fpqwXiIfZHXdfrVYUkvUxQcwsJqtpReRtix8NzzYzq+A2Enl3Haa3KZYO+eH/a8d6ccckPc7N54Fj/UhC7lphBBLuplars3jlfpakxedkYj6xKq75QPHKdZg5lXnXykvJWA81EBGfv+Nb03lgWE823GLIiI03rd1+u50uj5s0o77CPKkYQ2s6+s50WjV80HEsllUFRzrOsvJfYF3IKn/jdKnVvxeTeGxm1iBYH51K0iNy3TV5UTYZd1Y88dUbeit+GUaOEvmTzrLrNsyACHQpY33YGqgwa799zH+mu9b9Ust4D4x0l571xZWUgx+29w91MN+tmNivLaMLHd5Nn47iYnmFxM0amopvlrJOOshhZpP346FmRMekbyBGtawnB0Y6uQo4v2Hw2iLFOqqxTvVptMHPSIAxe6ZTp3FOVM38VP9tynqOZLLsk4q2I2RdN52l0LLeKknvquTE5PO23musD1Y+9OkGllV8dRkGdOmqtnZsWM/Qa68rkiYkJ6wXrmN9yfS7VkosdhnvNdYbOw/69KPUK076tCvUpdasZ0jGJ573qGLBKaBhfQIvUYxZrbMuqd/ShDJGHGIXR451B31KdWlA6sELe9YzvKacnInJHvUjDeubIQyHe3km/XoYDfwSe306i8vbCmNBvAcJ0KV3IScn1huNfcwZ1rigk5r1V7BkSRM7hzorW3BMsAPcYcq7jsjFJMKVqpi7W3FkvTFrccsd9TaqWadK/14U4tGD99pWn/Y2vIkWHWxFFdWlYXz3iSvrjcY7FzAhR/33laz/oWNFGwepDPrUNt5L2QpgAfyxHEfsl+ZwZ73R7nO06/cqlKx3QBWi5YsA4J8Glh7OEURUhF5KIsyow09mdx95YL3R41W+VgqqWE9glR0cptNoHChdxjGiG0YQVGim1J2/pw2DqZxaH6znMScQ7nojW8X6Dyx1N3/ezT/dM8sDgjFW+lQc4y3gh/VMuJe0ayw+FesvwLq9tZYjcdKnIbU8XsFZsov3gl96EnjtnljPaAcZMzyogwMq1qlocA5rvzj4p03Oi4flaqNl5LrUH+vwXuZjvSi/qGC9l9I16hhfBf/Uav+UhoFudsE7eo/3DiNxjLeAN9bL+Emgjg0oWG+DZLB3TCjO1vunM17IjSKpGaLDu4pYf6yXwYs4UMkYBesshGJnfHAYW++f0sUT9W9/Ha316VUc4y3gkfXBFVw6pdWuYP3DG+sj2D81zUfqrZguzQEqMTCdgEqXemW9DBcq30gF63NvrFvHe6ntGhL690q1ZBVQ6VK/rJdRI5X6wax154QIEFYhQe+2FOB1aQ4Qz4hMNR4DuLzYBPbKeuPMaJfnqilYfwNtisuBVKJvFe9l+hxSWBl9Zjmt0hgvXMYn60zGKGIXCtYXYDJYWGp1UH0amcUWlndsqUWFDBrB5Jd1EKdBOJR6lwrWkwB25t1nMogt/NMELI9v9i9xGpEGEOONJJ97Zj1hi10qJJS+KQRXPSTTflro01fwrjiKlSagBLL9UoBn1iH3KnOoZW6hivVPUKceBPuHhT6t69IcitChDLADKDXlfLM+YvpUtjZUrG9BQMUeUqEhFwWvTyERrqI6la69GJLco7sLeWOdSXapPlWxzrIuHTbwGECf4uO96ztdmuMoeAHUOMhjvAW8s/4GIiaVZBAp95LofPXxYgRYvBerJHogGL4r/2apRFhRJcs9KuGddZY2JQuPKllnAWPinoFu7J9+A1vV9cK2J5AJPwhj0z/rEPKVBXyVrCdlUEEdL8bANN4L7NavvBcKHimoLlUpAv+sL2Cbvy9+wdSZGWUqCvlynoqZfwqy8c7CX8SSFC4xEEaPf9YTanTLTDZN7teK5aI4722AvELGe1+k2vfXRJ+q9ksB/lkvrRhxHomG9XmZ1USujirVyD9lyvf77qM/tUCkEhhn9gGsQ9KcZCtAl9NbbgUGEVkahgxrAH2K0RFboFYgGE93gQI5MIGbB7C+IMrdT23+OpddE5KTrGwABfBPQ0S9DAiGneCzPd70Z06VKkj5ANYHNHIhSSXSV8h0S9olJTJo9NH5SGz3UCTV2GaqPt6r9UtzPIB1KLWViEFENViHoz0vB5taxwfe0Yt0p/xmBy2qUkyw7BGsM3UqFMqYysd1peIsJtHOUq+yXEPd79lGq9jKhCSZVKdnQJemyhf0EazvVS8rrsr3J6pW+ZJM0FjNBXTbTvO9sSZCSRN8taJKF+Mt8AjWmREjfMtwtdXJrlpvlndreLFIoGNbsWrl0OtL/FLAHmf6j2Q1MVU8gnV2p0JDC9u94e2zxnu24PvvxhL+ilqkbMqyBzuDd0H95EGXah7OI1hXJxPhO5Us1mGtojgi8afhNhPoU/X+6ad2KXdR+hS58fQI1tlWv1Az4VnPXth9WuM9W/AXo9yURLeKb9dRzpiftjSAfYO8JqaKfzfrGWnvq3rLkkyzmqRbYPTpuz46mWBEFTah4BGssxidsBrcjPUMP61664KIBHu06zRHLFJgVFXJRJM2hop4L+17pA9OPoT1UJWaa8x6JgCmpxrxsUEN/Um7SOcYKcQCHXLTX9j3SISHSJihPwkDmH+mZMjzHpIAubcD8d6+9BtdlAer9U8xMd4C/3a5XmK0PVdNyZh0Uct9oKuXGcBSV6sLlngquyo+YenfbDneD1wz4ckVtbuji/dSDyiM1M5Aokv1wCfn/Xu9JCFmywrvJMYkfer0aYrQpTmWsJbFH6NivAUewTqrX3SICEiRLHlLMgoQq53JW7E+hXpubQZHWy2qUDFeGMk/61PlbTiynonhI2fPDDEJAFOl59mBhAztOFDttBN+Kul7JMIjWGdVo8I32pn1TGSUjcFQiTPMjhYZfQu9XwpQ6lP6ysQnhCfxCNY7ys1dD6w3ei/cnjYiOe+o0Kd7FZU1qB4QLsZb4AGsQ2qGROv4YD2Ph5fF3PoA8FzObILxSwFQoCcw7DU1MVU8Yrc6ctutxuG1zBJDjCTv59DE6tIcC/mXjRLEHsA6MxztMjOw2DLZjig4n0rjvb/47f9G2S3y/sUwKtZ7AOtQZC0hwxfrTGmrfH3ASBZEYboU17eRbpOFQb0ewChR6RGsX5QmjD/WkxUYkIiCc9B1u9r/l8AWbpOqB/un9drMjoEufQTrsKxkTaS8sQ6Zz6iFKtGn8OTQ3apYwXv15hZmDQf8sw7yVpaT64/1Rh+6ECLa2aXCeC9zo7G9Mttifbo3uyn/rLPWXRK94pH1spuu3tYGfVrVAS3QpehNkpZIn/YOZoV63lmHcjC7ChnDa0EDc8RSZfY0b90zSxDfA/lbpAjAL5XXxFThnXUWhLGpBjMFZERikm1F/ikt/wpDfP+XwUmgT0380hzeWQfDwqry0RSgTzH5/KxGi1ukYDZqt9w4fN3He2e43KMSvlmHvC+7Kl9TfOheLA5M9pb6lD00k77TbKes/BHoUvTD8806W+pWFe2mYPUVmMHu47007h6fjC4K8V4W8OgZF717Zh2sCkUQyCfrICIivXfKyQHwT9/MdWkO9oaAuQAJSvgGD35ZT1hvW3kll1fWU2WBQg2gT8GRYPsAZsmT0NmDPaxfQ13qm3Xo3aDKLPHK+smEdYiVhMWaHIDjZKJLc7xUN59Y4im+cY9X1ln9nCre+Yi1josY9qrxXuZEm/acbld/aFgEzI3ghfXkAHlCKhPKJ+vQah1ZUQpFXYUWoFoxTo0vC0+veElAXWAL3ht+WWfFc8p043/KcmxwfVtyfTqx06U5wD+9NXyioRyjh+eRdVaMHkcqx9gn6yx4hWyKxyeh70Acm/clZacZ5Ps2F2Nd6pN1SCvR+ec+WWd1Z0hLme099MryL5ue9uCfHnrltohJG21vrE9YkoomVu2RdTjhEX/LK+afgmdh1W/6rdSnkGBt1FnFF+tvQyA9uqoLmT2yDgIGL1PLImla/hXbnVVS+qfglxroUm+st1NodRHqNts9sv4LSw7dS4al70L7H8v219B0IJga7ZcC/LD+Jyj7i+huQ8m60cIre3biK8RYhhSsEbtTDQbQeRIaP5n1KfPC+rhMPNS3e1KyHph4LHB2jUn0qtT5xSxM/VLAS20cs4fng/U1l/6mvwsl6yn5QoeQyv07k7LrVaXSxvqEoEmFdVNx6c76gj8uCRH7U7K+iskBGez+YMcUGh29tufpiq/W/TjOfL2OmS71wHrlaLANog+LhvUgIi+Y048XIbNUjToMzCpVB/ZtI8fc05P0tpfDkfWPC38M3hlDl471TMOl+m3QQcpiPoZTrzT9sT8hCLys2xRMG9w6sb448nUTyOIsLeu3I5k1YuYtZeGH2NCj5/SpaS/7Cj7ZOKbN2Z1Yn33xNUIh9m1FsJ65eqSl6uhSGk0GJ3JSwP5pYLLlJkB53q/5w7Nm/U+rWpeFVigo1vMBL7L1PvvkjCbziCHTp45t3tnTM9Wllqz35uugUt0fkzP6PVeyHnKWASGHqWDU2ZrX3xbqEHISXVswgz7FN/BlMGY9WYxf0lp9OQkM2ikoWd+m1YdJuu8L3rib/bwMef1txRvLXbI7yxHQM0jGqQFY13k3vcFo1m5Ov7onUu+lQMjRZPrqOMxoV3mJwuxqm9+v8Z/J2+R7ebwEVVViF0TxFQkq9KlN+2zKenjqqNA6b66nbOXdMZ5z3jVrDKW7549z7RrFdW8Y8pXVEaqppQC9Yo/bSZfmKPxTVFZIDbDzGhIloiiOw+AO2a9+TZtx6Vfaz+ru2YoufbLuJ3vTp5o2dBjcorw2z75NdLcnRbYGh0tTSxX3fn9faz2/7kBcWlbf9n88HGeQh4utDCFL1uNhJn53Vsdo46Rq85y9YLKrZ6/Y2fxxc2gRJ78UkHfjsDp4xZz1nHCS9qe2585jdVl7uSHCFZ+9Yx2TdFABMv/US1bEjtgdO9zORDYCw1LEr8671wkm4CIB3oLove0vaa5DmUq5KdbD2vaBlyBDc9dGgA9idxLF4tDH4NLpHj936+n3vO16pk7TyEMYTfa7yxUeenr5Gi/cmoMXmK76DguHoddK7R5eDwUPMwQA6wYnCSTJoIAPwumQfm6p529GjwWwjq01fMIHaDqF1fnpT9gCWPdw+tcTaNDUTIvj05+wBxzc6n429RN4QJ2Ka+zpCRNAiqD78YJP4AG1yf/0PP5ToEWyYfBPT+Q/hSZy8+oJnwBlar63/4Q1WCM/x1jtEyZoQv74/0rY6P8FoCuZTQ3WE5ZgPSufnunfQ3KlNVja8+Se8AeWdfUMOP49QOq4SZ+tJ9zQPrNCIrtMuSeM8VaezEDw3ROfsMH267U5n/9s86TUMr3iKV8eizFk0ZRZkjHqnPonHPBzl1o2fJL+cHzUWSdXpwTFJzBYVFknZOcj5eoJNXqkwvn5GWn8KyDD/Kyi8JYW2nluUP8lvFwOqyBYHbrT5jP08pfwf0m05cNexpjlAAAAAElFTkSuQmCC"
                    alt="company logo"
                    className="mx-auto mb-6 h-16 w-auto"
                />
               <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        placeholder="search:"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow md hover:bg-indigo-500">
                            🔍
                        </button>
                </form>
            </div>
        </div>
    )

};

