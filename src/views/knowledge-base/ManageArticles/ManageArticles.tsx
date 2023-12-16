import reducer from './store'
import { injectReducer } from '@/store'
import Articles from './components/Articles'
import Container from '@/components/shared/Container'
import AdaptableCard from '@/components/shared/AdaptableCard'

injectReducer('knowledgeBaseManageArticles', reducer)

const ManageArticles = () => {
    return (
        <Container>
            <AdaptableCard>
                <Articles />
            </AdaptableCard>
        </Container>
    )
}

export default ManageArticles
