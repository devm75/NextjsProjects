

function ArticleListByCategory({articles,category}) {
        
    return (
        <>
            <h1>
                showing news for category <i>{category }</i>
            </h1>
            {articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h2>{article.id}{article.title}</h2>
                        <p>{article.description}</p>
                        
            </div>
        )
    })}
            </>
            )
}
    
export default ArticleListByCategory;

export async function getServerSideProps(context) {
    const { params, res, req, query } = context;
    console.log(query);
    res.setHeader('Set-Cookie',['name=Mohan'])
    const { category } = params;



    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json();

    return {
        props: {
            articles: data,
            category,
        }
    }

}