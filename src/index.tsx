import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Layout, PageHeader } from './components/layout'
import { HomePage } from './pages/home'
import { PrePrimaryPage, PrimaryPage, MiddleSchoolPage } from './pages/academics'
import { FacilitiesPage } from './pages/facilities'
import { InnovationPage, AboutPage, ContactPage, AdmissionsPage } from './pages/remaining'
import { MandatoryDisclosurePage } from './pages/mandatory-disclosure'
import { GalleryPage, SportsClubsPage, BrochurePage } from './pages/gallery-sports'
import { TransportPage } from './pages/transport'
import { EventsPage } from './pages/events'
import { SuccessStoriesPage } from './pages/success-stories'
import { StanfordPathwayPage } from './pages/stanford-pathway'

const app = new Hono()

// Diagnostic route
app.get('/health', (c) => c.text('Hono is running!'))
app.get('/api/test', (c) => c.json({ status: 'ok', runtime: 'edge' }))

// Enable CORS for API routes
app.use('/api/*', cors())

// API route for admission inquiry
app.post('/api/admission-inquiry', async (c) => {
    const data = await c.req.json()
    console.log('Admission Inquiry:', data)

    // In production, you would send email or save to database
    return c.json({
        success: true,
        message: 'Thank you! Our admissions team will contact you within 24 hours.'
    })
})

// Home Page
app.get('/', (c) => {
    return c.html(Layout(HomePage(), 'Home', 'home'))
})

// Academic Pages
app.get('/academics/pre-primary', (c) => {
    return c.html(Layout(PrePrimaryPage(), 'Pre-Primary Education', 'academics-pre-primary'))
})

app.get('/academics/primary', (c) => {
    return c.html(Layout(PrimaryPage(), 'Primary Education', 'academics-primary'))
})

app.get('/academics/middle', (c) => {
    return c.html(Layout(MiddleSchoolPage(), 'Middle School Education', 'academics-middle'))
})

app.get('/academics/secondary', (c) => {
    const content = `
    ${PageHeader(
        'Secondary & Senior Secondary Education',
        'Excellence Stage: Preparing students for board examinations, elite universities, and future success through academic rigor and innovation',
        '/static/images/secondary.png',
        'Secondary & Senior Secondary (Grades 9 - 12)'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold mb-6">Excellence Stage Curriculum</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        Grades 9-12 focus on academic excellence, board exam preparation, and university readiness. Students receive comprehensive support for CBSE board exams (X & XII), competitive entrance exams, and international university applications.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Our GenAI-powered design thinking framework continues to guide students through advanced research, innovation projects, and entrepreneurial ventures while building strong academic foundations.
                    </p>
                </div>
                <div class="bg-green-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6">Excellence Stage Objectives</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Board Exam Excellence (CBSE X & XII)</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">University Application Preparation</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Advanced Research & Innovation</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Entrepreneurial Skills Development</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">SAT/TOEFL Coaching & Test Prep</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Stream Options (XI-XII) -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Choose Your Stream (Grades 11-12)</h2>
                <p class="text-xl text-gray-600">Specialized pathways for your future career</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                        <i class="fas fa-flask text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Science Stream</h3>
                    <p class="text-gray-700 mb-4">Physics, Chemistry, Mathematics/Biology with Computer Science</p>
                    <ul class="space-y-2 text-sm text-gray-600">
                        <li>• Engineering preparation</li>
                        <li>• Medical entrance coaching</li>
                        <li>• Research opportunities</li>
                        <li>• Lab-intensive learning</li>
                    </ul>
                </div>

                <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                        <i class="fas fa-calculator text-4xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Commerce Stream</h3>
                    <p class="text-gray-700 mb-4">Accountancy, Business Studies, Economics with Mathematics</p>
                    <ul class="space-y-2 text-sm text-gray-600">
                        <li>• CA/CS preparation</li>
                        <li>• Business management</li>
                        <li>• Financial literacy</li>
                        <li>• Startup incubation</li>
                    </ul>
                </div>

                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                        <i class="fas fa-book text-4xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Humanities Stream</h3>
                    <p class="text-gray-700 mb-4">History, Political Science, Economics, Psychology</p>
                    <ul class="space-y-2 text-sm text-gray-600">
                        <li>• Civil services preparation</li>
                        <li>• Law entrance coaching</li>
                        <li>• Social sciences research</li>
                        <li>• Critical thinking skills</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Board Results & Success -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Our Board Results Speak for Themselves</h2>
            
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg text-center">
                    <div class="text-5xl font-extrabold text-orange-600 mb-2">100%</div>
                    <div class="text-2xl font-bold text-gray-900 mb-2">Class X Pass Rate</div>
                    <div class="text-gray-600">Consistent 100% pass rate for last 3 years</div>
                    <div class="mt-4 text-sm text-gray-600">
                        2023-24: 53 students | 2022-23: 40 students | 2021-22: 30 students
                    </div>
                </div>

                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg text-center">
                    <div class="text-5xl font-extrabold text-green-600 mb-2">100%</div>
                    <div class="text-2xl font-bold text-gray-900 mb-2">Class XII Pass Rate</div>
                    <div class="text-gray-600">Excellent track record across all streams</div>
                    <div class="mt-4 text-sm text-gray-600">
                        2023-24: 37 students | 2022-23: 49 students | 2021-22: 42 students
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Support & Facilities -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Comprehensive Support for Success</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded-2xl p-6 shadow-lg">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-book-reader text-2xl text-orange-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Board Exam Coaching</h3>
                    <p class="text-sm text-gray-600">Intensive preparation for CBSE X & XII board exams</p>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-lg">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-university text-2xl text-blue-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">University Counseling</h3>
                    <p class="text-sm text-gray-600">College application support & essay guidance</p>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-lg">
                    <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-certificate text-2xl text-purple-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">SAT/TOEFL Coaching</h3>
                    <p class="text-sm text-gray-600">Standardized test preparation for international universities</p>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-lg">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-lightbulb text-2xl text-green-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Innovation Projects</h3>
                    <p class="text-sm text-gray-600">Real-world startup incubation & research opportunities</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6">Shape Your Future at SNS Academy</h2>
            <p class="text-xl mb-8 opacity-90">
                Join India's first GenAI-powered Design Thinking CBSE school and prepare for excellence in board exams and beyond.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition">
                    Apply for Admission
                </a>
                <a href="/stanford-pathway" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 px-8 py-4 rounded-xl font-bold text-lg transition">
                    <i class="fas fa-university mr-2"></i>Pathway to Stanford
                </a>
            </div>
        </div>
    </section>
  `;
    return c.html(Layout(content, 'Secondary & Senior Secondary Education', 'academics-secondary'))
})

// Remove the old /academics/senior-secondary route (merged with secondary)
app.get('/academics/senior-secondary', (c) => {
    // Redirect to the combined secondary page
    return c.redirect('/academics/secondary', 301)
})

// Facilities Page
app.get('/facilities', (c) => {
    return c.html(Layout(FacilitiesPage(), 'Facilities', 'facilities'))
})

// Innovation Hub Page
app.get('/innovation', (c) => {
    return c.html(Layout(InnovationPage(), 'Innovation Hub', 'innovation'))
})

// About Page
app.get('/about', (c) => {
    return c.html(Layout(AboutPage(), 'About Us', 'about'))
})

// Contact Page
app.get('/contact', (c) => {
    return c.html(Layout(ContactPage(), 'Contact Us', 'contact'))
})

// Mandatory Disclosure Page
app.get('/mandatory-disclosure', (c) => {
    return c.html(Layout(MandatoryDisclosurePage(), 'Mandatory Disclosure', 'mandatory-disclosure'))
})

// Admissions Page
app.get('/admissions', (c) => {
    return c.html(Layout(AdmissionsPage(), 'Admissions', 'admissions'))
})

// Gallery Page
app.get('/gallery', (c) => {
    return c.html(Layout(GalleryPage(), 'Campus Gallery', 'gallery'))
})

// Sports & Clubs Page
app.get('/sports-clubs', (c) => {
    return c.html(Layout(SportsClubsPage(), 'Sports & Clubs', 'sports-clubs'))
})

// Brochure Page
app.get('/brochure', (c) => {
    return c.html(Layout(BrochurePage(), 'Digital Brochure', 'brochure'))
})

// Transport Page
app.get('/transport', (c) => {
    return c.html(Layout(TransportPage(), 'Transport Services', 'transport'))
})

// Events & Celebrations Page
app.get('/events', (c) => {
    return c.html(Layout(EventsPage(), 'Events & Celebrations', 'events'))
})

// Success Stories Page
app.get('/success-stories', (c) => {
    return c.html(Layout(SuccessStoriesPage(), 'Success Stories', 'success-stories'))
})

// Stanford Pathway Page
app.get('/stanford-pathway', (c) => {
    return c.html(Layout(StanfordPathwayPage(), 'Pathway to Stanford', 'stanford-pathway'))
})

export default app
