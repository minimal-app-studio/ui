import { useState } from "react";


type SideNavigationProps = {
    navigations: {
        item: React.ElementType;
    }[];
    logo: React.ElementType;
};

export const SideNavigation = ({ navigations, logo: Logo }: SideNavigationProps) => {
    const [active, setActive] = useState(0);
    return (
        <>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <Logo />
                    <ul className={`space-y-2 font-medium hover:cursor-pointer ${active === 0 ? 'text-blue-500' : 'text-gray-500'}`}>
                        {navigations.map(({ item: NavigationItem }, index) => (
                            <NavigationItem key={index} handleClick={() => setActive(index)} isActive={active === index} />
                        ))}
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia alias error et ea mollitia, totam tempora rem voluptatum tempore ullam voluptatem ipsum. Quidem consequuntur delectus expedita ullam tempora, similique nulla. Aperiam asperiores sequi architecto dolore ipsum dicta! Sed odit veritatis nesciunt illum? Doloribus reprehenderit architecto saepe expedita quidem maiores quis ea eaque ex ipsum labore, obcaecati recusandae, aspernatur tenetur repellendus consectetur modi a ut voluptatem illum culpa commodi porro esse quo? Beatae vel neque modi iusto quo ipsum unde veritatis ut dolores, eveniet repellat quia fugit ipsa similique quisquam consequatur ab! Vitae libero pariatur cupiditate, cumque quidem quo molestias doloribus eveniet culpa provident ipsa aut illo nam! Quo reprehenderit consequuntur sint, obcaecati architecto tenetur sunt quidem hic molestiae sed in corrupti, fugiat ad porro ipsam non impedit soluta cum unde expedita veniam ipsum magnam. Molestias quaerat hic animi sunt neque ipsam exercitationem alias suscipit deleniti commodi, veniam laudantium eum, ut voluptate obcaecati ullam. Consectetur quas voluptates explicabo eos hic aliquam sit quaerat voluptatibus facere placeat, dolor ipsum magni asperiores ad aperiam. Possimus vero soluta placeat natus, quia mollitia sequi voluptatem voluptas veritatis officia voluptate laboriosam sapiente sit. In harum molestiae id illo quo reiciendis blanditiis architecto ipsa laboriosam accusamus mollitia molestias ex ipsum voluptas, tenetur consequatur ullam amet, quos quia, sunt excepturi facere? Vero a porro ipsam cumque corporis velit tempora, temporibus perspiciatis dicta quas. Veniam, dolore molestiae quam sapiente vero id beatae eveniet exercitationem dolor dicta doloremque delectus, consequuntur numquam ullam rem corporis et excepturi perspiciatis laboriosam perferendis. Culpa quasi nesciunt modi iure ipsum recusandae, pariatur numquam, cum odio, reprehenderit facere. Blanditiis, optio eveniet qui incidunt omnis sapiente, dolorum doloribus labore quae illo error quasi alias velit, aliquam modi. Molestiae voluptatum labore aliquid a explicabo tempora voluptas fugiat, ea error hic eligendi dignissimos ad asperiores incidunt. Tenetur natus officia esse minus quo nemo ducimus maiores non corporis? Harum animi ipsa delectus voluptatum asperiores, nesciunt error atque! Eius, deserunt aliquid? Voluptatem, quas vero nemo dolores placeat laborum sed porro itaque? Veniam veritatis ducimus accusantium earum cupiditate eius, odio ea debitis ipsa. Vitae nemo, sequi veniam tenetur porro exercitationem recusandae itaque error ratione provident, in cum omnis minima, aperiam dolor facere corporis. Corrupti inventore ea esse, ipsum asperiores laboriosam deleniti rerum. Tempore, quas atque sed labore aliquam doloribus, impedit aut perferendis quod eaque rerum fugit exercitationem amet hic fugiat deserunt earum magni? Recusandae beatae ducimus pariatur vel ea tenetur inventore animi autem soluta cupiditate sit sapiente voluptatem perspiciatis harum quam nulla, a porro architecto, optio, aut natus sunt. Porro aspernatur cum consequatur officiis. Libero illum ullam perspiciatis perferendis dignissimos vitae voluptas! Error nulla dicta accusantium laudantium praesentium adipisci dolor neque eos dolore cupiditate ipsa laborum commodi sed, sequi eveniet ex minima, architecto provident voluptatem. Inventore beatae ab in nihil aperiam voluptas blanditiis nostrum! Maiores cum cupiditate commodi voluptatum culpa dolor nesciunt molestias, laboriosam consectetur necessitatibus iusto corrupti earum nihil voluptatem numquam? Accusamus quod doloremque aspernatur? Vitae excepturi sit sapiente! Voluptatem, amet! Corporis cum, error impedit dolor facere deserunt ipsum, dicta aliquam quae voluptates consequatur soluta ipsa voluptatem eum repellat in nihil quod nulla nostrum autem accusantium dolores qui ducimus molestias. Necessitatibus, cupiditate sequi architecto possimus quia, expedita corrupti sunt doloribus nihil accusamus voluptate facilis dicta atque laboriosam veniam optio voluptatum eaque corporis repudiandae fugiat. Temporibus reprehenderit corporis, perferendis iste debitis odio natus, pariatur ut maiores eos et in perspiciatis, ratione itaque placeat inventore ipsa. Est amet quaerat a beatae nesciunt sint quia voluptatibus debitis ullam excepturi, deserunt rerum enim quasi adipisci, cum inventore similique ratione doloribus suscipit soluta eligendi animi commodi minus. Nam, expedita adipisci eius voluptas quod, esse iste est eos perspiciatis, maxime atque libero aspernatur. Omnis deserunt aliquam aspernatur amet vitae laboriosam debitis provident sint error laborum, mollitia dolorum vel facere voluptates iste eligendi commodi adipisci? Vel eius officia voluptate vero minus numquam animi fugiat repellat libero sapiente ex maiores, dicta nisi excepturi. Libero, aperiam voluptatem exercitationem iusto totam iste autem sed tenetur fugiat nulla excepturi quas. Qui saepe veniam nemo explicabo, fuga eius dolor! Inventore, voluptatibus. Nesciunt maxime quis quo amet. Qui veniam blanditiis quod iste perspiciatis doloribus totam et. Est voluptates ab sapiente praesentium expedita. Commodi, minima provident? Ipsam delectus vero amet. Dolorum inventore illo delectus veniam a, corrupti molestias recusandae impedit soluta asperiores ipsam iste, eveniet vel minima adipisci quibusdam? Deleniti tempore temporibus architecto alias iure nihil odio eaque reiciendis corrupti repellat dignissimos sapiente obcaecati qui quas consequuntur quidem quaerat sint, dolor laborum mollitia saepe necessitatibus voluptatum in! Mollitia cupiditate amet dolorum. Voluptatum, nihil aliquid odio libero enim quasi doloremque recusandae dolorem obcaecati cupiditate corporis optio molestiae sed, temporibus perspiciatis praesentium nisi ratione a in cumque laborum. Quibusdam quos ut quam praesentium ab labore rerum libero provident ducimus! Sapiente sit ullam odit iusto ex blanditiis provident inventore aliquid assumenda. Esse in officiis, dolores beatae omnis quidem!</p>
            </div>
        </>
    );
};
